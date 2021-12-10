import DataTable from "../Datatable"
import { PlusIcon } from "../icons"
import { Button } from "../Inputs"
import { DataTableColections } from "./DatatableColections"

export const BlockSecondary = () => {
    return (
        <>
        <h2 className="text-3xl font-bold text-indigo-500">Noticias</h2>
          <div className="rounded-xl shadow-lg bg-white h-full p-8">
              <div className="flex items-center justify-between">
                <p className="font-bold text-md text-gray-700">9 campos</p>
                <Button onClick={() => {}} variant={"primary"}>
                    <PlusIcon className="w-4 h-4 text-white"/>
                    Añadir nuevo campo
                </Button>
              </div>

             <DataTableColections/>
          </div>
          </>
    )
}

