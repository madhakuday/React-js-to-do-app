import React, { Component } from 'react';

export class Test extends Component {
  render() {
    return (
      <>
        <ul>
          {this.props.data
            .filter((x) => {
              return x.isActive === true;
            })
            .map((curdata, index) => {
              return (
                <React.Fragment key={index}>
                  <li className="li mt-3 mb-3">
                    {curdata.name}
                    <button
                      className="btn btn-danger m-1"
                      onClick={() => this.props.onListDelClick(curdata)}
                    >
                      delete
                    </button>

                    {this.props.upbtnval === false ? (
                      <button
                        className="btn btn-danger m-1"
                        onClick={() => this.props.onListUpdClick(curdata)}
                      >
                        update
                      </button>
                    ) : (
                      <button
                        className="btn btn-danger m-1"
                        onClick={() => this.props.onListUpdClick(curdata)}
                        disabled={true}
                      >
                        update
                      </button>
                    )}
                  </li>
                </React.Fragment>
              );
            })}
        </ul>
      </>
    );
  }
}

export default Test;
