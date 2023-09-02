declare module "svelte-virtual-list-ce" {
  import { SvelteComponent } from "svelte";

  interface VirtualListProps {
    items: Array<any>;
    height?: string | number;
    itemHeight?: number;
    start?: number;
    end?: number;
    isAtTop?: boolean;
    isAtBottom?: boolean;
  }

  interface VirtualListMethods {
    scrollToIndex(index: number, opts?: ScrollToOptions): Promise<void>;
    scrollToBottom(shouldStickToBottom?: boolean): Promise<void>;
  }

  interface VirtualListEvents {
    scroll: CustomEvent<void>;
  }

  class VirtualList extends SvelteComponent<
    VirtualListProps,
    VirtualListEvents,
    VirtualListMethods
  > {}

  export default VirtualList;
}
