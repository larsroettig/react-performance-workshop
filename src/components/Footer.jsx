import React from "react";

export const Footer = () => {
  return (
    <footer class="mt-10 border-t-2 border-gray-100 footer relative pt-1 ">
      <div class="container mx-auto px-6">
        <div class="sm:flex sm:mt-8">
          <div class="mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row justify-between">
            <div class="flex flex-col">
              <span class="font-bold text-gray-700 uppercase mb-2">
                Footer header 1
              </span>
              <span class="my-2">
                <a href="#" class="text-blue-700  text-md hover:text-blue-500">
                  link 1
                </a>
              </span>
              <span class="my-2">
                <a href="#" class="text-blue-700  text-md hover:text-blue-500">
                  link 1
                </a>
              </span>
              <span class="my-2">
                <a href="#" class="text-blue-700  text-md hover:text-blue-500">
                  link 1
                </a>
              </span>
            </div>
            <div class="flex flex-col">
              <span class="font-bold text-gray-700 uppercase mt-4 md:mt-0 mb-2">
                Footer header 2
              </span>
              <span class="my-2">
                <a href="#" class="text-blue-700 text-md hover:text-blue-500">
                  link 1
                </a>
              </span>
              <span class="my-2">
                <a href="#" class="text-blue-700  text-md hover:text-blue-500">
                  link 1
                </a>
              </span>
              <span class="my-2">
                <a href="#" class="text-blue-700 text-md hover:text-blue-500">
                  link 1
                </a>
              </span>
            </div>
            <div class="flex flex-col">
              <span class="font-bold text-gray-700 uppercase mt-4 md:mt-0 mb-2">
                Footer header 3
              </span>
              <span class="my-2">
                <a href="#" class="text-blue-700  text-md hover:text-blue-500">
                  link 1
                </a>
              </span>
              <span class="my-2">
                <a href="#" class="text-blue-700  text-md hover:text-blue-500">
                  link 1
                </a>
              </span>
              <span class="my-2">
                <a href="#" class="text-blue-700  text-md hover:text-blue-500">
                  link 1
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="container mx-auto px-6">
        <div class="mt-16 flex flex-col items-center">
          <div class="sm:w-2/3 text-center py-6">
            <p class="text-sm text-blue-700 font-bold mb-2">
              © 2021 by Lars Roettig
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
