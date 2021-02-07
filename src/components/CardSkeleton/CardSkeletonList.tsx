import CardSkeleton from ".";
import HorizontalScrollingList from "../HorizontalScrollingList";

function CardSkeletonList() {
	return <HorizontalScrollingList>
		<CardSkeleton />
		<CardSkeleton />
		<CardSkeleton />
		<CardSkeleton />
		<CardSkeleton />
		<CardSkeleton />
		<CardSkeleton />
		<CardSkeleton />
		<CardSkeleton />
		<CardSkeleton />
	</HorizontalScrollingList>;
}

export default CardSkeletonList;
