import React from 'react'

function ColorAxis() {
    return (
        <div
            style={{
                height: 350,
                width: 100,
            }}>
            <div
                style={{
                    position: 'absolute',
                    fontFamily: 'Open Sans',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    fontSize: '10px',
                    marginLeft: 20,
                    top: '6%',
                    bottom: '54.84%',
                    background: '#F4F4F4',
                }}>
                # of office Visits
            </div>
            <div
                style={{

                    fontSize: 10,
                    width: 52,
                    height: 52,
                    position: 'absolute',
                    // left: '0%',
                    // right: '32.47%',
                    top: '9%',
                    bottom: '54.84%',
                    marginLeft: 20,
                    background: '#F4F4F4',
                    // transform: 'rotate(-90deg)',
                    // alignContent: 'center'
                }}>

                <p
                    style={{
                        fontFamily: 'Open Sans',
                        fontStyle: 'normal',
                        fontWeight: 400,
                        fontSize: '10px',
                        lineHeight: '14px',
                        display: 'flex',
                        alignItems: 'center',
                        textAlign: 'center',
                        width: 20,
                        marginLeft: 15
                    }}>
                    # of visits
                </p>
            </div>
            <div
                style={{
                    background: ' linear-gradient(180deg, #E6F3F7 1.56%, #BEDFEC 17.71%, #69B1CC 36.46%, #536CC5 69.79%, #F47954 100%)',
                    position: 'absolute',
                    width: 22,
                    height: 151,
                    marginTop: 145,
                    marginLeft: 20,
                }}>
                <div
                    style={{
                        marginTop: -20,
                        fontSize: 10,
                    }}>
                    Low
                </div>
                <div
                    style={{
                        marginTop: 160,
                        fontSize: 10,
                    }}>
                    High
                </div>

            </div>

        </div>
    )
}

export default ColorAxis