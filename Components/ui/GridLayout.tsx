import React from 'react'
import { BentoGrid, BentoGridItem } from './BentoGrid'
interface Item {
  title: string;
  description: string;
  id: string
}

function Grid() {
  const array: Item[] = [{ title: "Title1", description: "Desc1", id: "1" }]
  return (
    <>
      <section>
        <BentoGrid>
          {
            array?.map((item) => {
              return <>
                <BentoGridItem
                  id={item.id}
                  key={item.id}
                  title={item.title}
                  description={item?.description}
                />
              </>
            })
          }
        </BentoGrid>
      </section>
    </>
  )
}

export default Grid