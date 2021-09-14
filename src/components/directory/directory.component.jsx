import React from 'react';
import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'hats',
          imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
          id: 1,
          linkUrl: '/shop/hats'
        },
        {
          title: 'jackets',
          imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
          id: 2,
          linkUrl: '/shop/hats'
        },
        {
          title: 'sneakers',
          imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
          id: 3,
          linkUrl: '/shop/hats'
        },
        {
          title: 'womens',
          imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
          size: 'large',
          id: 4,
          linkUrl: '/shop/hats'
        },
        {
          title: 'mens',
          imageUrl: 'https://i.ibb.co/R70vBrQ/mens.png',
          size: 'large',
          id: 5,
          linkUrl: '/shop/hats'
        },
      ],
    }
  }

  render() {
    const { sections } = this.state;
    return (
      <div className='directory-menu'>
        {
          sections.map(({ id, ...sectionProps }) => (
            <MenuItem key={id} {...sectionProps} />
          ))
        }
      </div>
    )
  }
}

export default Directory;