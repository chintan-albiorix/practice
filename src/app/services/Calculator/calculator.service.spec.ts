import { CalculatorService } from "./calculator.service";

describe('CalculaterService', () => {
  let mockLoggerService: any;
  let calculaterService: any;
  beforeEach(()=>{
    mockLoggerService = jasmine.createSpyObj('LoggerService', ['log']);
    calculaterService = new CalculatorService(mockLoggerService);
  });
  it('should add two numbers', () => {
    let result = calculaterService.add(2, 2);
    expect(result).toBe(4);
    expect(mockLoggerService.log).toHaveBeenCalledTimes(1);
  });
  it('should substract two numbers', () => {
    let result = calculaterService.substract(2, 2);
    expect(result).toBe(0);
    expect(mockLoggerService.log).toHaveBeenCalledTimes(1);
  });
});