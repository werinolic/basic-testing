import axios from 'axios';
import { throttledGetDataFromApi } from './index';

jest.mock('axios');
jest.mock('lodash', () => ({
  throttle: jest.fn((fn) => fn), // Mock throttle to bypass throttling behavior for tests
}));

describe('throttledGetDataFromApi', () => {
  beforeEach(() => {
    jest.clearAllMocks(); // Clear any previously stored mocks
  });

  test('should create instance with provided base URL', async () => {
    const relativePath = '/posts/1';
    const mockResponse = { data: { id: 1, title: 'Test Post' } };

    // Mock the axios.create() and axios.get() behavior
    const axiosInstance = { get: jest.fn().mockResolvedValue(mockResponse) };
    (axios.create as jest.Mock).mockReturnValue(axiosInstance);

    // Call the function
    await throttledGetDataFromApi(relativePath);

    // Check that axios.create was called with the correct base URL
    expect(axios.create).toHaveBeenCalledWith({
      baseURL: 'https://jsonplaceholder.typicode.com',
    });
  });

  test('should perform request to correct provided URL', async () => {
    const relativePath = '/posts/1';
    const mockResponse = { data: { id: 1, title: 'Test Post' } };

    // Mock the axios.create() and axios.get() behavior
    const axiosInstance = { get: jest.fn().mockResolvedValue(mockResponse) };
    (axios.create as jest.Mock).mockReturnValue(axiosInstance);

    // Call the function
    await throttledGetDataFromApi(relativePath);

    // Check that axios.get was called with the correct relative URL
    expect(axiosInstance.get).toHaveBeenCalledWith(relativePath);
  });

  test('should return response data', async () => {
    const relativePath = '/posts/1';
    const mockResponse = { data: { id: 1, title: 'Test Post' } };

    // Mock the axios.create() and axios.get() behavior
    const axiosInstance = { get: jest.fn().mockResolvedValue(mockResponse) };
    (axios.create as jest.Mock).mockReturnValue(axiosInstance);

    // Call the function and capture the result
    const result = await throttledGetDataFromApi(relativePath);

    // Check that the returned data matches the mock response data
    expect(result).toEqual(mockResponse.data);
  });
});
