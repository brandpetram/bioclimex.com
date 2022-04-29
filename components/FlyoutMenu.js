/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import {
  BookmarkAltIcon,
  BriefcaseIcon,
  DesktopComputerIcon,
  GlobeAltIcon,
  InformationCircleIcon,
  NewspaperIcon,
  OfficeBuildingIcon,
  ShieldCheckIcon,
  UserGroupIcon,
} from '@heroicons/react/outline'

const company = [
  { name: 'BYPASS GÁSTRICO', href: '/procedimientos/bypass-gastrico', icon: InformationCircleIcon },
  { name: 'BANDA GÁSTRICA AJUSTABLE', href: '/procedimientos/banda-gastrica-ajustable', icon: OfficeBuildingIcon },
  { name: 'CENTRO DE AJUSTES', href: '/procedimientos/centro-de-ajustes', icon: NewspaperIcon },
  { name: 'CIRUGÍA DE REVISIÓN', href: '/procedimientos/cirugia-de-revision', icon: ShieldCheckIcon },
  { name: 'ALLURION BALLON', href: '/procedimientos/allurion-balon-gastrico', icon: DesktopComputerIcon },

]
const resources = [
  { name: 'SLEEVE (MANGA GÁSTRICA)', href: '/procedimientos/sleeve-manga-gastrica', icon: UserGroupIcon },
  { name: 'CIRUGÍA METABÓLICA', href: '/procedimientos/cirugia-metabolica', icon: GlobeAltIcon },
  { name: 'BALÓN INTRAGÁSTRICO', href: '/procedimientos/balon-intragastrico', icon: BookmarkAltIcon },
  { name: 'ENDOSCOPÍA DIGESTIVA', href: '/procedimientos/endoscopia-digestiva', icon: DesktopComputerIcon },
  { name: 'BARICLIP', href: '/procedimientos/bariclip', icon: DesktopComputerIcon },
]
const blogPosts = [
  {
    id: 1,
    name: 'Cirujano bariatra en Monterrey: Pros y contras de los tratamientos para perder peso',
    href: '/blog/cirujano-bariatra-monterrey-pros-y-contras-de-los-tratamientos-para-perder-peso/',
    preview: 'Hoy en día existen numerosas técnicas quirúrgicas que realizadas por un cirujano bariatra Monterrey y siguiendo las recomendaciones nutricionales y de actividad física del equipo multidisciplinario...',
    imageUrl:
      'https://brandpetram.imgix.net/bse.mx/cirugia-bariatra-en-monterrey-8.jpeg',
  },
  {
    id: 2,
    name: 'Manga gástrica en Monterrey, una solución a los problemas de obesidad',
    href: '/blog/manga-gastrica-monterrey-una-solucion-a-los-problemas-de-obesidad/',
    preview: 'Sin duda, es importante decir que una de las principales razones por las que este método ha sido ampliamente utilizado por la comunidad médica está relacionada con el éxito que se obtiene...',
    imageUrl:
      'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2300&q=80',
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const FlyoutMenu = () => {
  return (
    
    <Popover className="z-0 ">
      {({ open }) => (
        <>
          <div className="relative z-10 ">
            <div className="max-w-7xl mx-auto flex pb-5">
              <Popover.Button
                id="popBottom"
                className={classNames(
                  open ? 'text-xs xl:text-sm 2xl:text-md 3xl:text-lg 4xl:text-xl 7xl:text-3xl font-light  text-slate-700' : 'text-xs xl:text-sm 2xl:text-md 3xl:text-lg 4xl:text-xl 7xl:text-3xl font-light  text-slate-700',
                  'group bg-white rounded-md inline-flex items-center text-base font-light hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 '
                )}
              >
                <span>Procedimientos</span>
                <ChevronDownIcon
                  className={classNames(
                    open ? 'text-gray-600' : 'text-gray-400',
                    'ml-2 h-5 w-5 group-hover:text-gray-500'
                  )}
                
                />
              </Popover.Button>
            </div>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 -translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 -translate-y-1"
          >
            <Popover.Panel className="absolute z-10 inset-x-0 transform shadow-lg">
              <div className="absolute inset-0 flex" aria-hidden="true">
                <div className="bg-white w-1/2" />
                <div className="bg-gray-50 w-1/2" />
              </div>
              <div className="relative w-screen mx-auto grid grid-cols-1 lg:grid-cols-2">
                <nav
                  className="grid gap-y-10 px-4 py-8 bg-white sm:grid-cols-2 sm:gap-x-8 sm:py-12 sm:px-6 lg:px-8 xl:pr-12"
                  
                >
                  <h2 id="solutions-heading" className="sr-only">
                    Solutions menu
                  </h2>
                  <div>
                 
                    <ul role="list" className="mt-5 space-y-6">
                      {company.map((item) => (
                        <li key={item.name} className="flow-root">
                          <a
                            href={item.href}
                            className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-50 transition ease-in-out duration-150"
                          >
                           
                            <span className="ml-12">{item.name}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                
                    <ul role="list" className="mt-5 space-y-6">
                      {resources.map((item) => (
                        <li key={item.name} className="flow-root">
                          <a
                            href={item.href}
                            className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-50 transition ease-in-out duration-150"
                          >
                            
                            <span className="ml-4">{item.name}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </nav>
                <div className="bg-gray-50 px-4 py-8 sm:py-12 sm:px-6 lg:px-8 xl:pl-12">
                  <div>
                    <h3 className="text-sm font-medium tracking-wide text-gray-500 uppercase">De nuestro blog bariátrico</h3>
                    <ul role="list" className="mt-6 space-y-6">
                      {blogPosts.map((post) => (
                        <li key={post.id} className="flow-root">
                          <a
                            href={post.href}
                            className="-m-3 p-3 flex rounded-lg hover:bg-gray-100 transition ease-in-out duration-150"
                          >
                            <div className="hidden sm:block flex-shrink-0">
                              <img className="w-32 h-20 object-cover rounded-md" src={post.imageUrl} alt="" />
                            </div>
                            <div className="min-w-0 flex-1 sm:ml-8">
                              <h4 className="text-base font-medium text-gray-900 truncate">{post.name}</h4>
                              <p className="mt-1 text-sm text-gray-500">{post.preview}</p>
                            </div>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-6 text-sm font-medium">
                    <a href="/blog" className="text-blue-600 hover:text-blue-500 transition ease-in-out duration-150">
                    De nuestro blog <span aria-hidden="true">&rarr;</span>
                    </a>
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  )
}

export default FlyoutMenu;