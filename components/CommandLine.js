import React from 'react';
import {Text, StyleSheet, ScrollView} from 'react-native';
const CommandLine = props => {

	return (
		<ScrollView ref={ref => this.scrollView = ref}
    	onContentSizeChange={(contentWidth, contentHeight)=>{        
        	this.scrollView.scrollToEnd({animated: true});	}}>
			<Text style = { styles.terminal_text }>	
				{props.bodyText}	
			</Text>	
		</ScrollView>
		);
};
export default CommandLine;
const styles = StyleSheet.create({
	terminal_text: {
    color: '#0AD013'
  }
});