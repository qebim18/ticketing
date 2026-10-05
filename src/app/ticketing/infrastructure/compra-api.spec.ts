import { TestBed } from '@angular/core/testing';
import { CompraApi } from './compra-api';

describe('CompraApi', () => {
  let service: CompraApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompraApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
