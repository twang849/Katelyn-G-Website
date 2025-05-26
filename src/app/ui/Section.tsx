export default function Section ({
    customSettings, 
    children, 
    bgColor="bg-white", 
    height="h-3/6" 
}: {
    customSettings?: string, 
    children: React.ReactNode, 
    bgColor?: string, 
    height?: string
}) {
    return (
        <div className={`${bgColor + " " + customSettings} flex flex-row gap-36 justify-center items-center ${height} w-screen`}>
            {children}
        </div>
    );
}