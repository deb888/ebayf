import { AfterHeaderModule } from './after-header.module';

describe('AfterHeaderModule', () => {
  let afterHeaderModule: AfterHeaderModule;

  beforeEach(() => {
    afterHeaderModule = new AfterHeaderModule();
  });

  it('should create an instance', () => {
    expect(afterHeaderModule).toBeTruthy();
  });
});
