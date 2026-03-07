import Image from "next/image";
import { assets, workData } from "@/assets/assets";

const Work = () => {
  return (
    <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg text-gray-700 dark:text-gray-300">
        {/* My portfolio */}
      </h4>
      <h2 className="text-center text-5xl">Featured Projects</h2>

      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 text-gray-700 dark:text-gray-300">
        Welcome to my web development portfolio! Explore a collection of
        projects showcasing my expertise in front-end and full-stack
        development.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-10 gap-5">
        {workData?.map((project, index) => {
          const Wrapper = project.link ? 'a' : 'div';
          const wrapperProps = project.link
            ? { href: project.link, target: '_blank', rel: 'noopener noreferrer' }
            : {};
          return (
          <Wrapper
            key={index}
            className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group block"
            style={{ backgroundImage: `url(${project.bgImage})` }}
            {...wrapperProps}
          >
            <div className="bg-white dark:bg-gray-800 w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
              <div>
                <h2 className="font-semibold dark:text-gray-100">{project.title}</h2>
                <p className="text-sm text-gray-700 dark:text-gray-300">{project.description}</p>
                {project.tech && (
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-0.5">{project.tech}</p>
                )}
              </div>
              <div className="border rounded-full border-black dark:border-gray-300 w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] dark:shadow-[2px_2px_0_#d1d5db] transition">
                <Image
                  src={assets.send_icon}
                  alt="send icon"
                  className="w-5 dark:hidden"
                  width={20}
                  height={20}
                />
                <Image
                  src={assets.send_icon_night}
                  alt="send icon"
                  className="w-5 hidden dark:block"
                  width={20}
                  height={20}
                />
              </div>
            </div>
          </Wrapper>
          );
        })}
      </div>
    </div>
  );
};

export default Work;
