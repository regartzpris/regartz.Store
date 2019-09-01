import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionsOverview from '../../components/collections-overview/collections-overview';
import CollectionsPage from '../collections/collectionspage';

import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';
import { selectIsCollectionFetching, selectCollectionIsLoading } from '../../redux/shop/shop.selector'

import WithLoading from '../../components/with-loading/with-loading';





//wrapped WithLoading
const CollectionsOverviewWithLoading = WithLoading(CollectionsOverview);
const CollectionsPageWithLoading = WithLoading(CollectionsPage);




class ShopPage extends React.Component {


    componentDidMount() {
        const { fetchCollectionsStartAsync } = this.props;
        fetchCollectionsStartAsync();



        // const { updateCollections } = this.props;
        // const collectionRef = firestore.collection('collections');

        // this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
        //     // console.log('snappshot',snapshot);
        //     const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        //     // console.log('collectionsMap', collectionsMap);
        //     updateCollections(collectionsMap);
        //     this.setState({ loading: false });
        // });

        //     collectionRef.get().then(async snapshot => {
        //         // console.log('snappshot',snapshot);
        //         const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        //         // console.log('collectionsMap', collectionsMap);
        //         updateCollections(collectionsMap);
        //         this.setState({ loading: false });
        // 
    }




    render() {

        const { match, isCollectionFetching ,isCollectionLoading} = this.props;

        return (
            <div className='shop-page'>
                <Route exact path={`${match.path}`} render={props => (
                    <CollectionsOverviewWithLoading isLoading={isCollectionFetching} {...props} />
                )} />


                <Route path={`${match.path}/:collectionId`} render={props => (
                    <CollectionsPageWithLoading isLoading={!isCollectionLoading} {...props} />

                )} />

            </div>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    isCollectionFetching: selectIsCollectionFetching,
    isCollectionLoading:selectCollectionIsLoading
})



const MapsDispatchToProps = dispatch => ({
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())

})

export default connect(mapStateToProps, MapsDispatchToProps)(ShopPage);