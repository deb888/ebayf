import { AfterFooterModule } from './after-footer.module';

describe('AfterFooterModule', () => {
  let afterFooterModule: AfterFooterModule;

  beforeEach(() => {
    afterFooterModule = new AfterFooterModule();
  });

  it('should create an instance', () => {
    expect(afterFooterModule).toBeTruthy();
  });
});
