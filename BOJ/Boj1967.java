import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.*;


class Edge{
    int child;
    int value;

    public Edge(int child, int value) {
        this.child = child;
        this.value = value;
    }
}
public class Boj1967 {
    static HashMap<Integer, ArrayList<Edge>> graph;
    static int max = 0;
    static int maxNode = 0;
    public static void main(String[] args) throws IOException {
        BufferedReader br =  new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st;
        int n= Integer.parseInt(br.readLine());
        graph = new HashMap<>();

        for (int i = 0; i < n-1; i++) {
            st = new StringTokenizer(br.readLine());
            int a = Integer.parseInt(st.nextToken());
            int b = Integer.parseInt(st.nextToken());
            int c = Integer.parseInt(st.nextToken());
            if(!graph.containsKey(a)) graph.put(a, new ArrayList<>());
            if(!graph.containsKey(b)) graph.put(b, new ArrayList<>());
            graph.get(a).add(new Edge(b, c));
            graph.get(b).add(new Edge(a, c));
        }

        if(n > 1){
            dfs(1, 1,0); //가장 깊은 노드 찾기
            max = 0;
            dfs(maxNode, maxNode,0); // 가장 깊은 노드부터 시작해서 가장 긴 지름 찾기
        }
        System.out.println(max);
        br.close();
    }

    static void dfs(int curNode, int prevNode, int sum){
        ArrayList<Edge> edge = graph.get(curNode);
        if(edge.size() == 1 && curNode != prevNode){
            if(max < sum){
                maxNode = curNode;
                max = sum;
            }
            return;
        }
        for(Edge curEdge : graph.get(curNode)){
            if(curEdge.child == prevNode) continue; //이미 간 부분. 가지 않는다.
            dfs(curEdge.child, curNode,sum + curEdge.value);
        }
    }
}
