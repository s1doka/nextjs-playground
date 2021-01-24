import CardSkeleton from ".";
import ReleasesList from "../ReleasesList";

function CardSkeletonList() {
	return <ReleasesList>
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
	</ReleasesList>;
}

export default CardSkeletonList;
