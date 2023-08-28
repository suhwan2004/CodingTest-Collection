import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.LinkedList;
import java.util.ListIterator;

public class Boj1406 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringBuilder sb = new StringBuilder();

        String input = br.readLine();
        int M = Integer.parseInt(br.readLine());

        LinkedList<Character> list = new LinkedList<>();
        for(char ch : input.toCharArray()){
            list.add(ch);
        }

        ListIterator<Character> iter = list.listIterator(list.size());

        for(int i = 0; i < M; i++){
            String command = br.readLine();
            switch(command.charAt(0)){
                case 'L':
                    if(iter.hasPrevious()) iter.previous();
                    break;
                case 'D':
                    if(iter.hasNext()) iter.next();
                    break;
                case 'B':
                    if(iter.hasPrevious()) {
                        iter.previous();
                        iter.remove();
                    }
                    break;
                case 'P':
                    iter.add(command.charAt(2));
                    break;
            }
        }

        for(char ch : list){
            sb.append(ch);
        }
        System.out.println(sb.toString());
        br.close();
    }
}
