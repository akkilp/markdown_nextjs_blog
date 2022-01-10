import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'
import { PageSEO } from '@/components/SEO'

export default function AuthorLayout({ children, frontMatter }) {
  const { name, avatar, occupation, company, email, twitter, linkedin, github } = frontMatter

  return (
    <>
      <PageSEO title={`About - ${name}`} description={`About me - ${name}`} />
      <div className="divide-y">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:leading-10 md:leading-14">
            Tietoa
          </h1>
        </div>
        <div className="pt-10 flex flex-col md:flex-row">
          <div>
            <Image
              src={avatar}
              alt="avatar"
              width="1092px"
              height="1572px"
              quality={100}
              className="w-64 h-64 rounded-md max-w-lg"
            />
            <div className="text-center pt-6 pb-6  max-w-none text-2xl lg:2xl xl:col-span-2">
              <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">{name}</h3>
              <div className="text-gray-500 dark:text-gray-400">{occupation}</div>
              <div className="text-gray-500 dark:text-gray-400">{company}</div>
            </div>
          </div>

          <div className=" p-8 text-center prose dark:prose-dark max-w-none text-xl md:text-2xl xl:col-span-2">
            {children}
          </div>
        </div>
      </div>
    </>
  )
}
