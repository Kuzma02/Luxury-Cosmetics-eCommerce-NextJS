
import StatsContainer from "@/components/StatsContainer";


const StatsSection = () => {
    return (
        <div className="py-10 px-10 flex center justify-center items-center bg-primary gap-72 max-[1430px]:flex-col-reverse max-[1430px]:gap-10">
            <h2 className="text-3xl max-sm:text-2xl max-[480px]:text-xl">Trusted by Over <b>960,000</b> Clients <br/> Worldwide Since <b>2005</b></h2>
            <StatsContainer />
        </div>
    );
}

export default StatsSection;