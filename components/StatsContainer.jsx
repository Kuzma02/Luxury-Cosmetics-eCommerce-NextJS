import SingleStat from "@/components/SingleStat";

const StatsContainer = () => {
    return (
        <div className="flex gap-10 max-[660px]:flex-col">
            <SingleStat showStars={true} mainText="4.8" descText={<p>5230 ratings</p>}/>
            <SingleStat showStars={false} mainText="18M+" descText={<p className="leading-6">Worldwide Product<br/> Sales per Year</p>}/>
            <SingleStat showStars={false} mainText="100+" descText={<p className="leading-6">Luxury and<br/> Premium Products</p>}/>
        </div>
    );
}

export default StatsContainer;