interface ApiResponse<T = string> {
  data: T;
}


const response1: ApiResponse = { data: "Success" }; // Uses default `string`
const response2: ApiResponse<number> = { data: 200 }; // Overrides default type
console.log(response1.data);
console.log(response2.data);