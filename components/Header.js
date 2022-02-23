import Image from 'next/image'
import HeaderItem from './HeaderItem'
import {
  HomeIcon,
  BadgeCheckIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
  CollectionIcon,
} from '@heroicons/react/outline'

function Header() {
  return (
    <div>
      <header className=" m-5 flex h-auto flex-col items-center justify-between sm:flex-row ">
        <div className="flex max-w-2xl flex-grow justify-evenly">
          <HeaderItem title="HOME" Icon={HomeIcon} />
          <HeaderItem title="TRENDING" Icon={LightningBoltIcon} />
          <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon} />
          <HeaderItem title="COLLECTION" Icon={CollectionIcon} />
          <HeaderItem title="SEARCH" Icon={SearchIcon} />
          <HeaderItem title="ACCOUNT" Icon={UserIcon} />
        </div>
        <Image
          className="object-contain"
          src="https://links.papareact.com/ua6"
          width={200}
          height={100}
        />
      </header>
    </div>
  )
}

export default Header
