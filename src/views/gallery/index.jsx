
function Gallery() {
    return (

        <div className=" w-[80%] sm:w-[60%] mx-auto my-10 md:p-1 tansition delay-150 duration-300  ">

            <h1 className=" text-xl sm:text-3xl text-black text-center font-bold m-7 ">Our Gallery</h1>

            <div class="grid grid-cols-4 md:grid-cols-4 gap-4">
                <div class="grid gap-4">
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src="https://images.pexels.com/photos/14025956/pexels-photo-14025956.jpeg?auto=compress&cs=tinysrgb&h=226.525&fit=crop&w=253.17499999999998&dpr=2" alt="" />
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src="https://images.pexels.com/photos/8438874/pexels-photo-8438874.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" />
                    </div>
                    {/* <div>
                    <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg" alt="" />
                </div> */}
                </div>
                <div class="grid gap-4">
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src="https://images.pexels.com/photos/7869036/pexels-photo-7869036.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" />
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src="https://images.pexels.com/photos/8566569/pexels-photo-8566569.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" />
                    </div>
                    {/* <div>
                    <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg" alt="" />
                </div> */}
                </div>
                <div class="grid gap-4">
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src="https://images.pexels.com/photos/7868822/pexels-photo-7868822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src="https://images.pexels.com/photos/8294682/pexels-photo-8294682.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" />
                    </div>
                    {/* <div>
                    <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg" alt="" />
                </div> */}
                </div>
                <div class="grid gap-4">
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src="https://images.pexels.com/photos/9243229/pexels-photo-9243229.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" />
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src="https://images.pexels.com/photos/7869090/pexels-photo-7869090.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" />
                    </div>
                    {/* <div>
                    <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg" alt="" />
                </div> */}
                </div>
            </div>

        </div>
    )
};

export default Gallery;