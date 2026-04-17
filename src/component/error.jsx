"use client"
const error = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen text-red-500">
            <h1>Error</h1>
            <p>Something went wrong please try again later!</p>
        </div>
    );
};

export default error;