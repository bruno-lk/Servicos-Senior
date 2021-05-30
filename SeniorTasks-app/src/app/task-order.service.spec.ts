import { TestBed } from '@angular/core/testing';

import { TaskOrderService } from './task-order.service';

describe('TaskOrderService', () => {
  let service: TaskOrderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskOrderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
