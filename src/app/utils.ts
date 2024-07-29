import { Node } from "./editor"
import { ModuleNode, CustomNode,
ParameterNode,
InputNode,
OutputNode} from "./nodes"

import { CustomSocket } from "./sockets"

export function getNewNode(nodeName: string, config?: any) : Node {
	let node : Node;
	if (nodeName === "Step") node = new ModuleNode();
	else if (nodeName === "Input") node = new InputNode();
	else if (nodeName === "Output") node = new OutputNode();
	else if (nodeName === "Parameter") node = new ParameterNode();
	else node = new CustomNode(nodeName, config);
	return node;
}

export function getSocket(socketName : string) : CustomSocket {
	return new CustomSocket(socketName);
}

export function getColorFromCategory(category: string) : string {
	const saturation = 0.3;
	const value = 0.7;
	// create random number using the category as seed
	let seed = 0
	for (let i = 0; i < category.length; i++) {
		seed += category.charCodeAt(i);
		seed *= category.charCodeAt(i);
		seed ^= category.charCodeAt(i);
		seed %= 10000;
	}
	let random = seed % 100 / 100;
	return `hsl(${random * 360}, ${saturation * 100}%, ${value * 100}%)`;
}