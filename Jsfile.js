
const tabs = document.querySelectorAll( '[data-tab-target]' );
const tabContents = document.querySelectorAll( '.tab-content' );


const contentTabs = document.querySelectorAll( '[data-content-target]' );

// const ContentTabTargets = document.querySelectorAll( '.content-tab-target' );

// handles tabs on the navbar



contentTabs.forEach( tab => {
    tab.addEventListener( 'click', () => {
        const target = document.querySelector( tab.dataset.contentTarget );

        const contentTabTargets = tab.parentNode.parentNode.parentNode.querySelectorAll( '.content-tab-target' );

        contentTabTargets.forEach( tabContent => {
            tabContent.classList.remove( 'active' )
        } );

        contentTabs.forEach( tab => {
            tab.classList.remove( 'active' )
        } );

        tab.classList.add( 'active' );
        target.classList.add( 'active' );
    } );
} );

tabs.forEach( tab => {
    tab.addEventListener( 'click', () => {
        const target = document.querySelector( tab.dataset.tabTarget );

        tabContents.forEach( tabContent => {
            tabContent.classList.remove( 'active' )
        } );

        tabs.forEach( tab => {
            tab.classList.remove( 'active' )

        } );
        tab.classList.add( 'active' );
        target.classList.add( 'active' );
    } );
} );


