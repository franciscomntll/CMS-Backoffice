import { Button } from "../Inputs";

const PaginationMobile = (props) => {
  const {
    to,
    total,
    previousPage,
    nextPage,
    canPreviousPage,
    canNextPage,
    pageIndex,
    gotoPage,
    selectShow = true,
  } = props;
  return (
    <div className="w-full flex justify-between lg:hidden items-center">
      <Button 
        type={"button"} 
        variant={"secondary"}
        disabled={!canPreviousPage}
        onClick={() => previousPage()}
        >
        Anterior
      </Button>
      <p className="text-sm text-gray-500">Pagina {pageIndex} de {to}</p>
      <Button 
        type={"button"} 
        variant={"secondary"}
        disabled={!canNextPage}
        onClick={() => nextPage()}
        >
        Siguiente
      </Button>
    </div>
  );
};

export default PaginationMobile;
