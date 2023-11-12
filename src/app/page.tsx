import D3Graph from '@/components/D3Graph'
import Image from 'next/image'
import Toolbar from '@/components/toolbar'
import CodeInput from '@/components/CodeInput'
import CodeGenerate from '@/components/CodeGenerate'
import DownArrow from '@/components/DownArrow'
import GraphContext from '@/components/GraphContext'

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Toolbar />

      <div className='flex flex-col'>
        <div id='graph-screen' className='w-screen h-screen bg-slate300 no-select'>
      <GraphContext />
      <div id="d3-graph"></div>
        </div>

        <div className='flex flex-row items-center justify-center'>
          <div>
            <CodeGenerate />
          </div>
          <div className='items-center'>
            <CodeInput />
          </div>
        </div>
        
      </div>

      <DownArrow />
    </main>
  )
}
