import React, { Component } from 'react';

export default class SpellCard extends Component{
    render() {
        return (
            <div>
                <div class="ui link cards">
                    <div class="card">
                        <div class="image">
                        <img alt="pic" src="/images/avatar2/large/matthew.png" />
                        </div>
                        <div className="content">
                        <div className="header">Matt Giampietro</div>
                        <div className="meta">
                            <a href="/">Friends</a>
                        </div>
                        <div class="description">
                            Matthew is an interior designer living in New York.
                        </div>
                        </div>
                        <div class="extra content">
                        <span class="right floated">
                            Joined in 2013
                        </span>
                        <span>
                            <i class="user icon"></i>
                            75 Friends
                        </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}