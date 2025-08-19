const asyncHandler = fn => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
}
// the idea is to avoid the overhead of try catch block or when using
// functions that return promises.
export default asyncHandler;