import { Test, TestingModule } from '@nestjs/testing';
import { AppliedJobsService } from './applied-jobs.service';

describe('AppliedJobsService', () => {
  let service: AppliedJobsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AppliedJobsService],
    }).compile();

    service = module.get<AppliedJobsService>(AppliedJobsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
