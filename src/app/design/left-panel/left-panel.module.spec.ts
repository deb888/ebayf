import { LeftPanelModule } from './left-panel.module';

describe('LeftPanelModule', () => {
  let leftPanelModule: LeftPanelModule;

  beforeEach(() => {
    leftPanelModule = new LeftPanelModule();
  });

  it('should create an instance', () => {
    expect(leftPanelModule).toBeTruthy();
  });
});
