class Channel extends React.Component{
    render(){
        return(
             <li>{this.props.channel}</li>
        )
    }
}

class ChannelList extends React.Component{
    render(){
        return(
             <ul>
                {this.props.channels.map(channel=>{
                    return <Channel channel={channel.name} key={channel.name}/>
                })
                }
             </ul>
        )
    }
}


class ChannelForm extends React.Component{
    constructor(props){
        super(props);
        this.state={}
    }
    onChange(e){
        this.setState(
            {channelName:e.target.value}
        )
    }
    onSubmit(e){
        console.log(this.state.channelName);
        this.props.addChannel(this.state.channelName);
        this.setState(
            {channelName:''}
        )
        e.preventDefault();
    }
    render(){
        return(
             <form onSubmit={this.onSubmit.bind(this)}>
                <input onChange={this.onChange.bind(this)}
                value={this.state.channelName}/>           
             </form>
        )
    }
}

class ChannelSection extends React.Component{
    constructor(props){
        super(props);
        this.state={
            channels:[
                {name:'Hardware Support'},
                {name:'Software Support'}
            ]
        }
    }
    addChannel(channelName){
        let {channels}=this.state;
        channels.push({
            name:channelName
        })
        this.setState({channels:channels});
    }
    render(){
        return(
             <div>
                <ChannelList channels={this.state.channels}/>
                <ChannelForm addChannel={this.addChannel.bind(this)}/>
             </div>
        )
    }
}


ReactDOM.render(<ChannelSection/>,document.getElementById('app'));

