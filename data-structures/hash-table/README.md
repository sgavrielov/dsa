# Data Structures - Hash Table

| Method | Time Complexity |
| :----- | --------------: |
| insert |            O(1) |
| lookup |            O(1) |
| delete |            O(1) |
| search |            O(1) |

## Hash Tables vs Arrays

| Arrays |                 | Hash Tables |                 |
| ------ | --------------: | ----------- | --------------: |
| Method | Time Complexity | Method      | Time Complexity |
| search |            O(n) | search      |            O(1) |
| lookup |            O(1) | lookup      |            O(1) |
| push   |            O(1) | push        |            O(1) |
| insert |            O(n) | insert      |            O(1) |
| delete |            O(n) | delete      |            O(1) |

| Pros                                              | Cons               |
| :------------------------------------------------ | :----------------- |
| Fast lookups\* (Good collision resolution needed) | Unordered          |
| Fast inserts                                      | Slow key iteration |
| Flexible Keys                                     |                    |
