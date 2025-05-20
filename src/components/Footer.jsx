export default function Footer() {
  return (
    <>
      <footer className="w-full  dark:bg-gray-900 text-gray-600 dark:text-gray-300 py-6 mt-10">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()}{' '}
            <span className="font-semibold">React Lab</span>. All rights
            reserved.
          </p>

          <div className="flex space-x-4 mt-4 sm:mt-0">
            <a href="https://www.linkedin.com/in/eh-munna/">
              <img
                src="https://img.shields.io/badge/LinkedIn-%230A66C2?style=flat&logo=linkedin&logoColor=white"
                alt="LinkedIn"
              />
            </a>
            <a href="https://github.com/eh-munna">
              <img
                src="https://img.shields.io/badge/GitHub-%23121011?style=flat&logo=github&logoColor=white"
                alt="GitHub"
              />
            </a>
            <a href="mailto:emran.h.munna@gmail.com">
              <img
                src="https://img.shields.io/badge/emran.h.munna@gmail.com-%23D14836?style=flat&logo=gmail&logoColor=white"
                alt="Email"
              />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
