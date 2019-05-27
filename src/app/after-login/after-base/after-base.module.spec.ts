import { AfterBaseModule } from './after-base.module';

describe('AfterBaseModule', () => {
  let afterBaseModule: AfterBaseModule;

  beforeEach(() => {
    afterBaseModule = new AfterBaseModule();
  });

  it('should create an instance', () => {
    expect(afterBaseModule).toBeTruthy();
  });
});
