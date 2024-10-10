import React from 'react'

const BlogDetail = () => {
  return (
    <div className="container mx-auto mt-8">

        <div className="flex flex-col md:flex-row items-start gap-8">

            <img src="/Images/photobg.png" alt="blogPostBanner" className="w-full md:w-1/2 rounded-lg shadow"/>

            <div className="flex flex-col gap-3">

                <h1 className="text-lg md:text-xl font-medium text-neutral-900 dark:text-neutral-200">Webpack vs Vite: Comparison of Build Tools for Frontend Projects</h1>

                <p className="text-neutral-500">Unlearning should also be part of the process</p>

                <div className="flex items-center gap-2">   

                    <span className="text-sm p-2 text-neutral-300 font-medium bg-neutral-950 bg-opacity-30 border border-neutral-800 rounded-full">Technology</span>

                    <span className="text-sm p-2 text-neutral-300 font-medium bg-neutral-950 bg-opacity-30 border border-neutral-800 rounded-full">Frontend</span>

                </div>

                <div className="flex items-center gap-6">

                    <span className="font-medium text-sm text-neutral-800 dark:text-neutral-300">11/05/2022</span>

                    <button className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.463 3.994c-2.682-1.645-5.023-.982-6.429.074c-.576.433-.864.65-1.034.65s-.458-.217-1.034-.65C9.56 3.012 7.219 2.349 4.537 3.994C1.018 6.153.222 13.274 8.34 19.284C9.886 20.427 10.659 21 12 21s2.114-.572 3.66-1.717c8.118-6.008 7.322-13.13 3.803-15.289" color="#ffffff"/></svg>
                        <span className="text-neutral-300">29</span>
                    </button>

                    <button className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.099 19q-1.949-.192-2.927-1.172C2 16.657 2 14.771 2 11v-.5c0-3.771 0-5.657 1.172-6.828S6.229 2.5 10 2.5h4c3.771 0 5.657 0 6.828 1.172S22 6.729 22 10.5v.5c0 3.771 0 5.657-1.172 6.828S17.771 19 14 19c-.56.012-1.007.055-1.445.155c-1.199.276-2.309.89-3.405 1.424c-1.563.762-2.344 1.143-2.834.786c-.938-.698-.021-2.863.184-3.865" color="#ffffff"/></svg>
                        <span className="text-neutral-300">12</span>
                    </button>

                    <button className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18 7c.774.16 1.359.429 1.828.876C21 8.992 21 10.788 21 14.38s0 5.388-1.172 6.504S16.771 22 13 22h-2c-3.771 0-5.657 0-6.828-1.116S3 17.972 3 14.38s0-5.388 1.172-6.504C4.642 7.429 5.226 7.16 6 7m6.025-5L12 14m.025-12a.7.7 0 0 0-.472.175C10.647 2.94 9 4.929 9 4.929M12.025 2a.7.7 0 0 1 .422.174C13.353 2.94 15 4.93 15 4.93" color="#ffffff"/></svg>
                        <span className="text-neutral-300">Share</span>
                    </button>

                </div>

            </div>

        </div>

        <div className="pt-8 text-neutral-200">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla cum, aliquid eius, perferendis unde alias sit quisquam nemo ipsum eos placeat nihil in perspiciatis facilis aperiam sapiente? Tempore recusandae doloremque quibusdam explicabo soluta repudiandae sunt maiores, nam praesentium qui eos optio a error quae vel cumque numquam sint et eaque aliquid repellat. Aut saepe tempora atque dignissimos corporis maiores assumenda, quam velit dicta non fugit impedit vitae voluptatum fugiat itaque reiciendis qui, eveniet eum nesciunt veniam eos temporibus voluptates nostrum. Nostrum distinctio id nobis harum, saepe voluptatibus nemo ipsam accusamus aliquam magnam asperiores debitis sit quidem molestias odio cupiditate maiores.</p>
        </div>

    </div>
  )
}

export default BlogDetail