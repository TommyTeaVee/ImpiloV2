const Articles = () => {
    return (
      <article className="uk-article">
  
        <h1 className="uk-article-title">
          <a className="uk-link-reset" href="">Article Title</a>
        </h1>
  
        <p className="uk-article-meta">Written by <a href="#">Super User</a> on 12 April 2012. Posted in <a href="#">Blog</a></p>
  
        <div className="uk-grid-small uk-child-width-expand@s uk-text-center" data-uk-grid>
          <div>
            <div className="uk-card uk-card-default uk-card-body">Item 1</div>
          </div>
          <div>
            <div className="uk-card uk-card-default uk-card-body">Item 2</div>
          </div>
          <div>
            <div className="uk-card uk-card-default uk-card-body">Item 3</div>
          </div>
        </div>
  
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  
        <div className="uk-grid-match uk-child-width-1-2@m" data-uk-grid>
          <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          <div>
            <img src="https://picsum.photos/640/480/?random" alt="" />
          </div>
        </div>
  
        <h2>Heading</h2>
  
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  
        <h3>Sub-heading</h3>
  
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  
        <ul className="uk-list uk-list-bullet">
          <li>List item 1</li>
          <li>List item 2</li>
          <li>List item 3</li>
        </ul>
  
      </article>
    );
  };
  export default Articles
  