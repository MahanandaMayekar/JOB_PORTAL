import { Test, TestingModule } from '@nestjs/testing';
import { AppliedJobsController } from './applied-jobs.controller';

describe('AppliedJobsController', () => {
  let controller: AppliedJobsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AppliedJobsController],
    }).compile();

    controller = module.get<AppliedJobsController>(AppliedJobsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
