class ApiResponse{
    constructor(
        statusCode,data,message="success"
    )
    {
        this.statusCode=statusCode
        this.data=data
        this.message=message
        this.success=statusCode < 400 // All server has some statuscode based on different responses you can check online about it 
    }
}


export { ApiResponse }