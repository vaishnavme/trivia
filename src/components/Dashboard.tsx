export const Dashboard = () => {
    return (
        <div className="max-w-sm shadow-md rounded-xl flex-grow p-2 mr-5">
            <div className="flex flex-col items-center">
                <img
                    className="w-48 h-auto rounded-md ring"
                    src={'./girl.png'}
                    alt="boy"
                />
                <div className="my-4">
                    <h1 className="font-medium">👋 John Snow</h1>
                </div>
            </div>
        </div>
    );
};
