import CategoryItem from "./CategoryItem";

export default function Categories() {
    return (
        <div className="container mx-auto text-slate-400">
            <div className="flex flex-col items-center justify-center space-y-10 h-screen max-w-[400px] m-auto ">
                <h1 className="text-blue-500 font-bold text-4xl">Categories</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 w-full">
                    <CategoryItem title={'General Knowledge'} catNum={9} />
                    <CategoryItem title={'Animals'} catNum={27} />
                    <CategoryItem title={'Celebrities'} catNum={26} />
                    <CategoryItem title={'History'} catNum={23} />
                    <CategoryItem title={'Computers'} catNum={18} />
                </div>
            </div>
        </div>
    )
}
