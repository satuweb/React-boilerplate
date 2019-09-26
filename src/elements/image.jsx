import React from 'react';

class Image extends React.Component {
    render() {
        return <img className={`image ${this.props.classStyle}`}
            src={this.props.avatar.avatarUrl}
            alt={this.props.avatar.name}
        />
    }
}

export default Image;