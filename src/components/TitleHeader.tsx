"use client"

type Title = {
    title:string
}

const TitleHeader = ({title}:Title) => {
  return (
    <div className="flex flex-col items-center gap-5">

        <div className="font-semibold md:text-5xl text-2xl text-center">
            {title}
        </div>
    </div>
  )
}

export default TitleHeader