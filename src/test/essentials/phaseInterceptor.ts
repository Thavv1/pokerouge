import {EncounterPhase, LoginPhase, SelectGenderPhase, TitlePhase} from "#app/phases";

export default class PhaseInterceptor {
  public scene;
  public phases = {};
  public log;
  private onHold;

  private PHASES = [
    [LoginPhase, this.startPhase],
    [TitlePhase, this.startPhase],
    [SelectGenderPhase, this.startPhase],
    [EncounterPhase, this.startPhase],
  ];

  constructor(scene) {
    this.scene = scene;
    this.log = [];
    this.onHold = [];
    this.initPhases();
  }

  run(phaseTarget, skipFn = ()=> false): Promise<void> {
    return new Promise(async (resolve) => {
      this.waitUntil(phaseTarget, skipFn).then(() => {
        const currentPhase = this.onHold.shift();
        currentPhase.call();
      }).finally(() => {
        resolve();
      });
    });
  }

  remove(phaseTarget): Promise<void> {
    return new Promise(async (resolve) => {
      this.waitUntil(phaseTarget).then(() => {
        this.onHold.shift();
        this.scene.getCurrentPhase().end();
      }).finally(() => {
        resolve();
      });
    });
  }

  waitUntil(phaseTarget, skipFn?): Promise<void> {
    return new Promise((resolve, reject) => {
      this.interval = setInterval(() => {
        const currentPhase = this.onHold?.length && this.onHold[0] && this.onHold[0].name;
        if (currentPhase === phaseTarget.name) {
          return resolve();
        } else if (skipFn && skipFn()) {
          reject();
        }
      }, 1000);
    });
  }

  initPhases() {
    for (const [phase, method] of this.PHASES) {
      const originalStart = phase.prototype.start;
      this.phases[phase.name] = originalStart;
      phase.prototype.start = () => method.call(this, phase);
    }
  }

  startPhase(phase) {
    this.log.push(phase.name);
    const instance = this.scene.getCurrentPhase();
    this.onHold.push({
      name: phase.name,
      call: () => {
        this.phases[phase.name].apply(instance);
      }
    });
  }


  // loginPhase(phase){
  //   this.log.push('loginPhase');
  //   const instance = this.scene.getCurrentPhase();
  //   this.onHold.push({
  //     name: phase.name,
  //     call: () => {
  //       this.phases[phase.name].apply(instance);
  //     }
  //   });
  // };
  //
  // titlePhase(phase){
  //   this.log.push('titlePhase');
  //   const instance = this.scene.getCurrentPhase();
  //   this.onHold.push({
  //     name: phase.name,
  //     call: () => {
  //       this.phases[phase.name].apply(instance);
  //     }
  //   });
  // };
  //
  // encounterPhase(phase){
  //   this.log.push('encounterPhase');
  //   const instance = this.scene.getCurrentPhase();
  //   this.onHold.push({
  //     name: phase.name,
  //     call: () => {
  //       this.phases[phase.name].apply(instance);
  //     }
  //   });
  // };
}
