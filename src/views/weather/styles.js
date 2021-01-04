import styled from "styled-components"

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    // min-height: 100vh;
    // align-items: center;
    // justify-content: center;
    // align-content: center;
    // padding-top: 15%;
`

const ResizeDiv = styled.div`
    display: flex;
    width: 100%;
    // max-width: 30rem;
    height: 100%;
    flex-direction: column;
    border-radius: .2rem;
`

const DayForecast = styled(ResizeDiv)`

    border: 1px solid;
    max-height: 20rem;
    margin: .5rem 0rem;
    padding: 1rem 0;
    // max-width: 50rem;
    border-color: rgba(0,0,0,.5);
    align-content: center;

`

// const Day = styled.length(ResizeDiv)`


// `

export {Wrapper, DayForecast}